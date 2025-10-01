// Example: TypeScript Interfaces
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

export function showInterfacesDemo(container: HTMLElement) {
  const user: User = { id: 1, name: "Alice", isActive: true };
  container.innerHTML = `
    <h2>Interfaces Demo</h2>
    <p>ID: ${user.id}</p>
    <p>Name: ${user.name}</p>
    <p>Active: ${user.isActive}</p>
  `;
}
