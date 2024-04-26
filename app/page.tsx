"use client";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import App from "@/components/app";

export default function DashboardPage() {
  return (
    <CopilotKit url='/api/copilotkit/'>
      <CopilotSidebar
        instructions='Help the user create and manage ad campaigns.'
        defaultOpen={true}
        labels={{
          title: "Campaign Manager Copilot",
          initial:
            "Hello there! I can help you manage your ad campaigns. What campaign would you like to work on?",
        }}
        clickOutsideToClose={false}>
        <App />
      </CopilotSidebar>
    </CopilotKit>
  );
}
