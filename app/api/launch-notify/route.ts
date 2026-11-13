import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2).max(100),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/),
  city: z.string().min(1),
  interest: z.enum(["passenger", "driver"]),
  email: z.string().email().optional().or(z.literal("")),
  consent: z.literal(true),
});

// Simple in-memory rate limiting (use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3;

  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await req.json();
    const result = schema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: "Invalid submission. Please check your details." },
        { status: 400 }
      );
    }

    const data = result.data;

    // ─────────────────────────────────────────────────────────────
    // DATABASE INTEGRATION PLACEHOLDER
    // ─────────────────────────────────────────────────────────────
    // To store submissions, configure a database and uncomment the
    // appropriate block below.
    //
    // Option A — Supabase (PostgreSQL):
    //   import { createClient } from "@supabase/supabase-js";
    //   const supabase = createClient(
    //     process.env.SUPABASE_URL!,
    //     process.env.SUPABASE_SERVICE_KEY!
    //   );
    //   await supabase.from("launch_registrations").insert([{
    //     full_name: data.fullName,
    //     mobile: data.mobileNumber,
    //     city: data.city,
    //     interest: data.interest,
    //     email: data.email || null,
    //     registered_at: new Date().toISOString(),
    //   }]);
    //
    // Option B — MongoDB (Mongoose / native driver):
    //   const client = new MongoClient(process.env.MONGODB_URI!);
    //   await client.connect();
    //   const db = client.db("raahi");
    //   await db.collection("launch_registrations").insertOne({
    //     ...data, registeredAt: new Date()
    //   });
    //   await client.close();
    //
    // Environment variables needed (.env.local):
    //   SUPABASE_URL=...
    //   SUPABASE_SERVICE_KEY=...
    //   MONGODB_URI=...
    // ─────────────────────────────────────────────────────────────

    // Log the submission (remove in production once DB is connected)
    console.log("[LaunchNotify] New registration:", {
      name: data.fullName,
      city: data.city,
      interest: data.interest,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Registration successful. We'll notify you when Raahi launches." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[LaunchNotify] Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
