export function prettyLog(title, details = {}) {
  const separator = "=".repeat(53);

  console.log(`
${separator}
${title}
${separator}
${Object.entries(details)
  .map(([key, value]) => `${key.padEnd(12)}: ${value}`)
  .join("\n")}
${separator}
`);
}
