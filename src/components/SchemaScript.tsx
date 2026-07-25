type JsonLd = Record<string, unknown>;

/** Renders one or more JSON-LD blocks. Server component. */
export function SchemaScript({ schema }: { schema: JsonLd | JsonLd[] }) {
  const items = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {items.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
