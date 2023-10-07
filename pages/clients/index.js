import React from "react";
import { Link } from "next/link";

const Client = () => {
  const clients = [
    {
      id: 1,
      name: "client 1",
    },
    {
      id: 2,
      name: "client 2",
    },
  ];
  return (
    <div>
      <h1>clientId</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Client;
