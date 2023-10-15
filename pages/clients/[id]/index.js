import { useRouter } from "next/router";
import React from "react";

const ClientId = () => {
  const router = useRouter();

  const loadProjHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {
        id: router.query.id || 1,
        clientProjectId: router.query.clientProjectId || 1,
      },
    });
  };
  return (
    <div>
      <h1>The projects of a given client</h1>
      <ul>
        <li>client 1</li>
        <li>client 2</li>
      </ul>
      <button></button>
    </div>
  );
};

export default ClientId;
