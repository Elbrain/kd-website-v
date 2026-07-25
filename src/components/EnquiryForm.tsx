"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { rentalModelLabels, type RentalModel } from "@/data/rooms";

type Mode = "pt" | "rooms";

const inputCls =
  "w-full border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-stone/60 focus:border-ink focus:outline-none";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

/**
 * Dual-mode enquiry form: personal training and room rental journeys stay
 * separate (separate fields, separate conversion events) per the brief.
 * Progressive: the rooms mode reveals requirement fields after contact block.
 */
export function EnquiryForm({ mode: initialMode = "pt" }: { mode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const startedAt = useState(() => Date.now())[0];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, mode, elapsedMs: Date.now() - startedAt }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="border border-line bg-white p-8" role="status">
        <h3 className="display text-2xl text-ink">Thank you</h3>
        <p className="mt-3 text-stone">
          {mode === "pt"
            ? "Your enquiry is on its way. We'll come back to you within one working day to arrange your free 30-minute introductory session."
            : "Your room enquiry is on its way. We'll come back to you within one working day with availability details and viewing options."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-white p-6 sm:p-8" noValidate={false}>
      {/* Mode switch */}
      <div className="mb-6 grid grid-cols-2 gap-2" role="tablist" aria-label="Enquiry type">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "pt"}
          onClick={() => setMode("pt")}
          className={`btn ${mode === "pt" ? "btn-primary" : "btn-outline"} w-full text-base`}
        >
          Personal training
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "rooms"}
          onClick={() => setMode("rooms")}
          className={`btn ${mode === "rooms" ? "btn-euca" : "btn-outline"} w-full text-base`}
        >
          Rooms to rent
        </button>
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className={labelCls}>
            Name *
          </label>
          <input id="f-name" name="name" required autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="f-email" className={labelCls}>
            Email *
          </label>
          <input id="f-email" name="email" type="email" required autoComplete="email" className={inputCls} />
        </div>
        <div>
          <label htmlFor="f-phone" className={labelCls}>
            Phone
          </label>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
        </div>
        <div>
          <label htmlFor="f-contact" className={labelCls}>
            Preferred contact method
          </label>
          <select id="f-contact" name="contactMethod" className={inputCls} defaultValue="email">
            <option value="email">Email</option>
            <option value="phone">Phone call</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      {mode === "pt" ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="f-service" className={labelCls}>
              Service of interest
            </label>
            <select id="f-service" name="service" className={inputCls} defaultValue="">
              <option value="">Not sure yet</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="f-experience" className={labelCls}>
              Current experience
            </label>
            <select id="f-experience" name="experience" className={inputCls} defaultValue="">
              <option value="">Prefer not to say</option>
              <option>Complete beginner</option>
              <option>Returning after a break</option>
              <option>Train occasionally</option>
              <option>Train regularly</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="f-goal" className={labelCls}>
              Your goal
            </label>
            <input
              id="f-goal"
              name="goal"
              placeholder="e.g. lose weight, get stronger, recover from an injury"
              className={inputCls}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="f-days" className={labelCls}>
              Preferred days or times
            </label>
            <input id="f-days" name="preferredDays" placeholder="e.g. weekday mornings" className={inputCls} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="f-message" className={labelCls}>
              Anything else?
            </label>
            <textarea id="f-message" name="message" rows={4} className={inputCls} />
          </div>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="r-business" className={labelCls}>
              Business or trading name
            </label>
            <input id="r-business" name="businessName" autoComplete="organization" className={inputCls} />
          </div>
          <div>
            <label htmlFor="r-profession" className={labelCls}>
              Your profession *
            </label>
            <input
              id="r-profession"
              name="profession"
              required
              placeholder="e.g. physiotherapist, counsellor"
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="r-roomtype" className={labelCls}>
              Type of room required
            </label>
            <select id="r-roomtype" name="roomType" className={inputCls} defaultValue="treatment">
              <option value="treatment">Treatment / therapy room</option>
              <option value="office">Office room</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <div>
            <label htmlFor="r-frequency" className={labelCls}>
              How often would you use it?
            </label>
            <select id="r-frequency" name="frequency" className={inputCls} defaultValue="">
              <option value="">Not sure yet</option>
              {(Object.keys(rentalModelLabels) as RentalModel[]).map((k) => (
                <option key={k} value={k}>
                  {rentalModelLabels[k]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="r-days" className={labelCls}>
              Preferred days
            </label>
            <input id="r-days" name="preferredDays" placeholder="e.g. Mondays and Thursdays" className={inputCls} />
          </div>
          <div>
            <label htmlFor="r-start" className={labelCls}>
              Desired start date
            </label>
            <input id="r-start" name="startDate" placeholder="e.g. from September" className={inputCls} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="r-use" className={labelCls}>
              Intended use *
            </label>
            <input
              id="r-use"
              name="intendedUse"
              required
              placeholder="Briefly describe what you'd run from the room"
              className={inputCls}
            />
          </div>
          <fieldset className="sm:col-span-2">
            <legend className="sr-only">Options</legend>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-ink">
                <input type="checkbox" name="viewingRequested" value="yes" className="h-4 w-4 accent-euca" />
                I&apos;d like to arrange a viewing
              </label>
              <label className="flex items-center gap-2 text-ink">
                <input type="checkbox" name="storageNeeded" value="yes" className="h-4 w-4 accent-euca" />
                I&apos;d need storage
              </label>
              <label className="flex items-center gap-2 text-ink">
                <input type="checkbox" name="callback" value="yes" className="h-4 w-4 accent-euca" />
                Request a call back
              </label>
            </div>
          </fieldset>
          <div className="sm:col-span-2">
            <label htmlFor="r-message" className={labelCls}>
              Additional requirements
            </label>
            <textarea id="r-message" name="message" rows={4} className={inputCls} />
          </div>
        </div>
      )}

      <p className="mt-5 text-sm text-stone">
        By submitting this form you agree that we may store and process the details you provide in
        order to respond to your enquiry. See our{" "}
        <Link href="/privacy-policy/" className="underline">
          privacy policy
        </Link>
        .
      </p>

      {state === "error" && (
        <p role="alert" className="mt-3 text-sm text-clay">
          Something went wrong sending your enquiry. Please try again, or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className={`btn ${mode === "rooms" ? "btn-euca" : "btn-primary"} mt-5 w-full disabled:opacity-60 sm:w-auto`}
      >
        {state === "sending" ? "Sending…" : mode === "pt" ? "Send enquiry" : "Send room enquiry"}
      </button>
    </form>
  );
}
