/**
 * Social proof. The business's genuine reviews live on its Google Business
 * Profile (linked from the old site's nav and from /results/).
 *
 * RULE (brief §22.16): no fabricated testimonials. This array ships EMPTY.
 * Add entries only with the reviewer's permission and the owner's approval
 * (TODO_CONFIRM_TESTIMONIALS). The /results/ page renders the Google
 * reviews link regardless, so real proof is always one tap away.
 */

export interface Testimonial {
  quote: string;
  name: string; // first name + initial is enough
  context: string; // e.g. "1 to 1 client since 2021"
  approved: boolean;
}

export const testimonials: Testimonial[] = [];
