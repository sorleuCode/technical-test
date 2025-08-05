"use client";
import { useState } from "react";
import PageContainer from "@/layout/page-container.layout";
import Card from "@/layout/card.layout";
import Button from "@/layout/button.layout";
import Input from "@/layout/input.layout";
import Heading from "@/layout/heading.layout";
import Text from "@/layout/text.layout";
import { login } from "@/service/auth.service";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await login(email);
      window.location.href = "/product-list";
    } catch {
      setError("Login failed. Please check your email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Card className="w-full max-w-xl space-y-6 p-8">
        <Heading level={2} align="center">
          Welcome Back
        </Heading>

        <Text align="center" size="sm" variant="muted">
          Login with your email to manage your product list
        </Text>

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          onClick={handleLogin}
          disabled={loading || !email}
          className="w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        {error && (
          <Text variant="error" align="center" size="sm">
            {error}
          </Text>
        )}
      </Card>
    </PageContainer>
  );
}
