import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatBotPage from "./pages/chatbot/ChatBotPage";
import DefaultLayout from "./components/layout/DefaultLayout";
import AuthLayout from "./components/layout/AuthLayout";
import SignInPage from "./pages/auth//SignIn/SignInPage";
import ForgotPasswordPage from "./pages/auth//SignIn/ForgotPassword";
import SignUpPage from "./pages/auth/SignUp/SignUpPage";
import { Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "chatbot/",
        element: <ChatBotPage />,
      },
      {
        path: "chatbot/:conversationId",
        element: <ChatBotPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/signin" replace={true} />,
      },
      {
        path: "signin",
        element: <SignInPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
