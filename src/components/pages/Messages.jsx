import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";
import { Header, Icon, Message, Table } from "semantic-ui-react";

const Messages = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const defaultMessages = [
    {
      id: "message-1",
      date: "2025-02-06 10:00 AM",
      text: "Hello! How are you?",
    },
    {
      id: "message-2",
      date: "2025-02-06 10:30 AM",
      text: "Don't forget our meeting at 3 PM.",
    },
    {
      id: "message-3",
      date: "2025-02-06 11:00 AM",
      text: "Lunch break at 12?",
    },
  ];

  const [messages, setMessages] = useState(defaultMessages);
  const [messageFetchFailed, setMessageFetchFailed] = useState(false);

  const possibleErrors = [
    "You've downloaded one of our resource server examples, and it's running on port 8000.",
    "Your resource server example is using the same Okta authorization server (issuer) that you have configured this React application to use.",
  ];

  return (
    <div>
      <Header as="h1">
        <Icon name="mail outline" />
        My Messages
      </Header>
      {messageFetchFailed && (
        <Message
          error
          header="Failed to fetch messages.  Please verify the following:"
          list={possibleErrors}
        />
      )}
      {!messages && !messageFetchFailed && <p>Fetching Messages..</p>}
      {messages && (
        <div>
          <p>
            This component makes a GET request to the resource server example,
            which must be running at
            <code>localhost:8000/api/messages</code>
          </p>
          <p>
            It attaches your current access token in the{" "}
            <code>Authorization</code> header on the request, and the resource
            server will attempt to authenticate this access token. If the token
            is valid the server will return a list of messages. If the token is
            not valid or the resource server is incorrectly configured, you will
            see a 401 <code>Unauthorized response</code>.
          </p>
          <p>
            This route is protected with the <code>&lt;SecureRoute&gt;</code>{" "}
            component, which will ensure that this page cannot be accessed until
            you have authenticated and have an access token in local storage.
          </p>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr id={message.id} key={message.id}>
                  <td>{message.date}</td>
                  <td>{message.text}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Messages;
