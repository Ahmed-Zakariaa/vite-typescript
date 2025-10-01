// Example: TypeScript Enums
enum Status {
  Pending,
  InProgress,
  Completed,
}

function getStatusLabel(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "Pending";
    case Status.InProgress:
      return "In Progress";
    case Status.Completed:
      return "Completed";
    default:
      return "Unknown";
  }
}

export function showEnumsDemo(container: HTMLElement) {
  const status = Status.InProgress;
  container.innerHTML = `
    <h2>Enums Demo</h2>
    <p>Status: ${getStatusLabel(status)}</p>
  `;
}
