/*
 * <license header>
 */

import { generatePath } from "react-router";
import { Text } from "@adobe/react-spectrum";
import { register } from "@adobe/uix-guest";
import { extensionId } from "./Constants";

function ExtensionRegistration() {
  const init = async () => {
    const guestConnection = await register({
      id: extensionId,
      methods: {
        actionBar: {
          getButtons() {
            return [
              // YOUR ACTION BAR BUTTONS CODE SHOULD BE HERE
              {
                id: "get-path",
                label: "Selections Bug",
                icon: "PublishCheck",
                onClick(selections) {
                  console.log("Selections Bug", selections, selections[0].id);
                },
              },
            ];
          },
        },
      },
    });
  };
  init().catch(console.error);

  return <Text>IFrame for integration with Host (AEM)...</Text>;
}

export default ExtensionRegistration;
