// Example: TypeScript Generics
function identity<T>(value: T): T {
  return value;
}

export function showGenericsDemo(container: HTMLElement) {
  const num = identity<number>(42);
  const str = identity<string>("Hello");
  container.innerHTML = `
    <h2>Generics Demo</h2>
    <p>Number: ${num}</p>
    <p>String: ${str}</p>
  `;
}
