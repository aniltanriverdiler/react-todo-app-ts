import { styled } from "styled-components";

// Modern Masculine Design System
const designSystem = {
  // Dark, bold masculine color palette
  colors: {
    // Primary colors - Navy and Steel
    primary: "#1E3A8A", // Deep Navy Blue
    primaryLight: "#3B82F6", // Brighter Blue
    primaryDark: "#1E40AF", // Darker Navy

    // Secondary colors - Forest and Slate
    secondary: "#059669", // Forest Green
    secondaryLight: "#10B981", // Lighter Green
    secondaryDark: "#047857", // Darker Forest

    // Neutral colors - Charcoal and Steel Gray
    background: "#0F172A", // Deep Charcoal Background
    surface: "#1E293B", // Slate Surface
    surfaceLight: "#334155", // Lighter Slate
    surfaceHover: "#475569", // Hover Slate

    // Text colors
    text: "#F8FAFC", // Almost White
    textSecondary: "#CBD5E1", // Light Gray
    textTertiary: "#94A3B8", // Medium Gray
    textMuted: "#64748B", // Muted Gray

    // Border colors
    border: "#334155", // Slate Border
    borderHover: "#475569", // Hover Border
    borderFocus: "#3B82F6", // Focus Border (Blue)

    // Status colors
    success: "#059669", // Forest Green
    danger: "#DC2626", // Bold Red
    warning: "#D97706", // Amber Orange

    // Interactive states
    focus: "rgba(59, 130, 246, 0.25)", // Blue focus with transparency
    done: "#374151", // Gray for completed items

    // Gradients
    gradientPrimary: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
    gradientSecondary: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    gradientSurface: "linear-gradient(135deg, #1E293B 0%, #334155 100%)",
  },

  // Enhanced typography
  typography: {
    fontFamily:
      "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeights: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
    letterSpacing: {
      tight: "-0.025em",
      normal: "0",
      wide: "0.05em",
    },
  },

  // Enhanced spacing scale
  spacing: {
    "2xs": "0.25rem", // 4px
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
  },

  // Enhanced shadow system for depth
  shadows: {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.15)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.35), 0 10px 10px -5px rgba(0, 0, 0, 0.15)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
    focus: "0 0 0 3px rgba(59, 130, 246, 0.25)",
    glow: "0 0 20px rgba(59, 130, 246, 0.3)",
  },

  // Enhanced radius scale
  radius: {
    none: "0",
    sm: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Smooth transitions
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "350ms cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
};

// Main container with dark theme
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: ${designSystem.spacing["3xl"]} ${designSystem.spacing.xl};
  min-height: 100vh;
  background: ${designSystem.colors.background};
  font-family: ${designSystem.typography.fontFamily};
  color: ${designSystem.colors.text};
  position: relative;

  /* Subtle background pattern */
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(
        circle at 25% 25%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(5, 150, 105, 0.08) 0%,
        transparent 50%
      );
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: ${designSystem.spacing.xl} ${designSystem.spacing.lg};
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: ${designSystem.spacing.lg} ${designSystem.spacing.md};
  }
`;

// Enhanced header with gradient text
export const Header = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: ${designSystem.spacing["3xl"]};
  position: relative;

  h1 {
    font-size: ${designSystem.typography.fontSizes["4xl"]};
    font-weight: ${designSystem.typography.fontWeights.extrabold};
    background-image: linear-gradient(
      to right,
      #ffffff,
      ${designSystem.colors.primaryLight}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    margin-bottom: ${designSystem.spacing.md};
    letter-spacing: ${designSystem.typography.letterSpacing.tight};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: ${designSystem.typography.fontSizes["3xl"]};
    }
  }

  p {
    color: ${designSystem.colors.textSecondary};
    font-size: ${designSystem.typography.fontSizes.lg};
    font-weight: ${designSystem.typography.fontWeights.medium};
    line-height: ${designSystem.typography.lineHeights.relaxed};
    max-width: 500px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: ${designSystem.typography.fontSizes.base};
    }
  }
`;

// Enhanced input container
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin-bottom: ${designSystem.spacing["2xl"]};
  gap: ${designSystem.spacing.lg};
  background: ${designSystem.colors.gradientSurface};
  padding: ${designSystem.spacing.xl};
  border-radius: ${designSystem.radius.xl};
  box-shadow: ${designSystem.shadows.lg};
  border: 1px solid ${designSystem.colors.border};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: ${designSystem.spacing.md};
    padding: ${designSystem.spacing.lg};
  }
`;

// Enhanced text input with focus states
export const TextField = styled.input`
  flex: 1;
  padding: ${designSystem.spacing.md} ${designSystem.spacing.lg}; /* küçültüldü */
  font-size: ${designSystem.typography.fontSizes.base}; /* 16px oldu */
  font-weight: ${designSystem.typography.fontWeights.medium};
  font-family: ${designSystem.typography.fontFamily};
  color: ${designSystem.colors.text};
  background-color: ${designSystem.colors.surface};
  border: 2px solid ${designSystem.colors.border};
  border-radius: ${designSystem.radius.lg};
  box-shadow: ${designSystem.shadows.sm};
  outline: none;
  transition: all ${designSystem.transitions.default};

  &:hover {
    border-color: ${designSystem.colors.borderHover};
    box-shadow: ${designSystem.shadows.md};
  }

  &:focus {
    border-color: ${designSystem.colors.borderFocus};
    box-shadow: ${designSystem.shadows.focus};
    background-color: ${designSystem.colors.surfaceLight};
  }

  &::placeholder {
    color: ${designSystem.colors.textMuted};
    font-weight: ${designSystem.typography.fontWeights.normal};
  }

  @media (max-width: 640px) {
    padding: ${designSystem.spacing.sm} ${designSystem.spacing.md}; /* biraz daha küçük */
    font-size: ${designSystem.typography.fontSizes.sm}; /* 14px */
  }
`;

// Enhanced button with gradient and hover effects
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${designSystem.spacing.md} ${designSystem.spacing.lg}; /* küçültüldü */
  font-size: ${designSystem.typography.fontSizes.base}; /* 16px oldu */
  font-weight: ${designSystem.typography.fontWeights.semibold};
  font-family: ${designSystem.typography.fontFamily};
  color: ${designSystem.colors.text};
  background: ${designSystem.colors.gradientPrimary};
  border: none;
  border-radius: ${designSystem.radius.lg};
  box-shadow: ${designSystem.shadows.md};
  cursor: pointer;
  transition: all ${designSystem.transitions.default};
  white-space: nowrap;
  letter-spacing: ${designSystem.typography.letterSpacing.wide};
  text-transform: uppercase;
  min-width: 120px; /* biraz küçültüldü */

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${designSystem.shadows.lg};
    background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${designSystem.shadows.md};
  }

  &:focus {
    box-shadow: ${designSystem.shadows.focus};
    outline: none;
  }

  @media (max-width: 640px) {
    padding: ${designSystem.spacing.sm} ${designSystem.spacing.md};
    font-size: ${designSystem.typography.fontSizes.sm};
    min-width: 100px;
  }
`;

// Enhanced list container
export const ListContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;

// Enhanced list component
export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: ${designSystem.typography.fontSizes["2xl"]};
    font-weight: ${designSystem.typography.fontWeights.bold};
    margin-bottom: ${designSystem.spacing.xl};
    color: ${designSystem.colors.text};
    letter-spacing: ${designSystem.typography.letterSpacing.tight};
    text-align: center;

    @media (max-width: 768px) {
      font-size: ${designSystem.typography.fontSizes.xl};
    }
  }
`;

// Enhanced todo item container
export const TodoItemContainer = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: ${designSystem.spacing.lg};
  animation: fadeInUp 0.3s ${designSystem.transitions.bounce};

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

// Enhanced list box with modern styling
export const ListBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "done",
})<{ done: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  padding: ${designSystem.spacing.xl};
  background: ${({ done }) =>
    done
      ? `linear-gradient(135deg, ${designSystem.colors.done} 0%, ${designSystem.colors.surface} 100%)`
      : designSystem.colors.gradientSurface};
  border: 2px solid
    ${({ done }) =>
      done ? designSystem.colors.textMuted : designSystem.colors.border};
  border-radius: ${designSystem.radius.lg};
  box-shadow: ${designSystem.shadows.md};
  margin-right: ${designSystem.spacing.md};
  transition: all ${designSystem.transitions.default};
  position: relative;
  overflow: hidden;

  /* Subtle shine effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${designSystem.shadows.lg};
    border-color: ${({ done }) =>
      done
        ? designSystem.colors.textSecondary
        : designSystem.colors.borderHover};

    &::before {
      left: 100%;
    }
  }

  span {
    margin-left: ${designSystem.spacing.md};
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
    color: ${({ done }) =>
      done ? designSystem.colors.textMuted : designSystem.colors.text};
    transition: all ${designSystem.transitions.default};
    flex: 1;
    font-size: ${designSystem.typography.fontSizes.lg};
    font-weight: ${({ done }) =>
      done
        ? designSystem.typography.fontWeights.normal
        : designSystem.typography.fontWeights.medium};
    line-height: ${designSystem.typography.lineHeights.relaxed};
    opacity: ${({ done }) => (done ? 0.7 : 1)};
  }

  /* Enhanced checkbox styling */
  input[type="checkbox"] {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid
      ${({ done }) =>
        done ? designSystem.colors.success : designSystem.colors.textTertiary};
    border-radius: ${designSystem.radius.sm};
    cursor: pointer;
    position: relative;
    transition: all ${designSystem.transitions.default};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${({ done }) =>
      done ? designSystem.colors.success : "transparent"};

    &:checked {
      background: ${designSystem.colors.gradientSecondary};
      border-color: ${designSystem.colors.success};
      box-shadow: ${designSystem.shadows.glow.replace(
        "59, 130, 246",
        "5, 150, 105"
      )};

      &:after {
        content: "✓";
        color: white;
        font-weight: ${designSystem.typography.fontWeights.bold};
        font-size: ${designSystem.typography.fontSizes.sm};
        position: absolute;
      }
    }

    &:hover {
      border-color: ${designSystem.colors.success};
      box-shadow: ${designSystem.shadows.sm};
    }

    &:focus {
      box-shadow: ${designSystem.shadows.focus.replace(
        "59, 130, 246",
        "5, 150, 105"
      )};
      outline: none;
    }
  }

  /* Enhanced text input for editing */
  input[type="text"] {
    margin-left: ${designSystem.spacing.md};
    flex: 1;
    border: none;
    padding: ${designSystem.spacing.sm} ${designSystem.spacing.md};
    font-size: ${designSystem.typography.fontSizes.lg};
    font-weight: ${designSystem.typography.fontWeights.medium};
    font-family: ${designSystem.typography.fontFamily};
    color: ${designSystem.colors.text};
    background-color: ${designSystem.colors.surface};
    border-radius: ${designSystem.radius.md};
    border: 2px solid ${designSystem.colors.borderFocus};
    outline: none;
    transition: all ${designSystem.transitions.fast};

    &:focus {
      border-color: ${designSystem.colors.primaryLight};
      box-shadow: ${designSystem.shadows.focus};
      background-color: ${designSystem.colors.surfaceLight};
    }
  }

  @media (max-width: 640px) {
    margin-right: 0;
    margin-bottom: ${designSystem.spacing.md};
  }
`;

// Enhanced actions container
export const ActionsContainer = styled.div`
  display: flex;
  gap: ${designSystem.spacing.sm};
  align-items: center;

  @media (max-width: 640px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: ${designSystem.spacing.sm};
  }
`;

// Enhanced action buttons with variants
export const ActionButton = styled(Button)<{
  variant?: "primary" | "success" | "danger" | "secondary";
}>`
  background: ${(props) => {
    switch (props.variant) {
      case "success":
        return designSystem.colors.gradientSecondary;
      case "danger":
        return `linear-gradient(135deg, ${designSystem.colors.danger} 0%, #B91C1C 100%)`;
      case "secondary":
        return designSystem.colors.surfaceLight;
      default:
        return designSystem.colors.gradientPrimary;
    }
  }};
  color: ${(props) => designSystem.colors.text};
  border: ${(props) =>
    props.variant === "secondary"
      ? `2px solid ${designSystem.colors.border}`
      : "none"};
  padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
  font-size: ${designSystem.typography.fontSizes.sm};
  font-weight: ${designSystem.typography.fontWeights.semibold};
  box-shadow: ${designSystem.shadows.sm};
  min-width: 80px;
  text-transform: capitalize;

  &:hover {
    background: ${(props) => {
      switch (props.variant) {
        case "success":
          return `linear-gradient(135deg, #10B981 0%, #059669 100%)`;
        case "danger":
          return `linear-gradient(135deg, #EF4444 0%, ${designSystem.colors.danger} 100%)`;
        case "secondary":
          return designSystem.colors.surfaceHover;
        default:
          return `linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)`;
      }
    }};
    transform: translateY(-1px);
    box-shadow: ${designSystem.shadows.md};
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Enhanced empty state
export const EmptyState = styled.div`
  text-align: center;
  padding: ${designSystem.spacing["3xl"]};
  background: ${designSystem.colors.gradientSurface};
  border: 2px dashed ${designSystem.colors.border};
  border-radius: ${designSystem.radius.xl};
  margin-top: ${designSystem.spacing.xl};
  box-shadow: ${designSystem.shadows.md};
  position: relative;
  overflow: hidden;

  /* Animated background */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      rgba(59, 130, 246, 0.05) 15deg,
      transparent 30deg
    );
    animation: rotate 20s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  p {
    margin-bottom: ${designSystem.spacing.md};
    line-height: ${designSystem.typography.lineHeights.relaxed};
    color: ${designSystem.colors.textSecondary};

    &:first-child {
      font-weight: ${designSystem.typography.fontWeights.semibold};
      font-size: ${designSystem.typography.fontSizes.xl};
      color: ${designSystem.colors.text};
      margin-bottom: ${designSystem.spacing.lg};
    }

    &:last-child {
      font-size: ${designSystem.typography.fontSizes.base};
      color: ${designSystem.colors.textMuted};
    }
  }

  /* Add icon */
  &::after {
    content: "📋";
    display: block;
    font-size: ${designSystem.typography.fontSizes["3xl"]};
    margin-bottom: ${designSystem.spacing.lg};
    opacity: 0.7;
  }
`;

// Global styles export
export const GlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
    width: 100%;
    background: ${designSystem.colors.background};
    font-family: ${designSystem.typography.fontFamily};
    color: ${designSystem.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${designSystem.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${designSystem.colors.borderHover};
    border-radius: ${designSystem.radius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${designSystem.colors.textMuted};
  }

  /* Selection styling */
  ::selection {
    background: ${designSystem.colors.focus};
    color: ${designSystem.colors.text};
  }
`;
