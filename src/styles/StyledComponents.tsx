import { styled } from "styled-components";

// Modern Design System
const designSystem = {
  // Refined color palette with softer tones
  colors: {
    primary: "#6366F1", 
    primaryLight: "#EEF2FF",
    background: "#F5F7FA", 
    surface: "#FFFFFF",
    text: "#374151", 
    textSecondary: "#9CA3AF",
    textTertiary: "#D1D5DB",
    border: "#F3F4F6",
    borderHover: "#E5E7EB",
    success: "#10B981", 
    danger: "#F43F5E", 
    warning: "#FBBF24",
    focus: "rgba(99, 102, 241, 0.12)", 
    done: "#E5E7EB", 
  },

  // typography
  typography: {
    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    fontSizes: {
      xs: "0.75rem", 
      sm: "0.875rem", 
      base: "1rem",
      lg: "1.125rem", 
      xl: "1.25rem", 
      "2xl": "1.5rem", 
      "3xl": "1.875rem", 
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
    letterSpacing: {
      tight: "-0.015em",
      normal: "0",
      wide: "0.025em",
    },
  },

  // Refined spacing scale
  spacing: {
    "2xs": "0.25rem", 
    xs: "0.5rem",  
    sm: "0.75rem", 
    md: "1rem", 
    lg: "1.5rem", 
    xl: "2rem", 
    "2xl": "3rem", 
    "3xl": "4rem", 
  },

  // Modern shadow system
  shadows: {
    xs: "0px 1px 2px rgba(15, 23, 42, 0.04)",
    sm: "0px 2px 4px rgba(15, 23, 42, 0.06), 0px 1px 2px rgba(15, 23, 42, 0.04)",
    md: "0px 4px 8px rgba(15, 23, 42, 0.08), 0px 2px 4px rgba(15, 23, 42, 0.04)",
    lg: "0px 12px 16px rgba(15, 23, 42, 0.08), 0px 4px 6px rgba(15, 23, 42, 0.04)",
    focus: "0px 0px 0px 4px rgba(99, 102, 241, 0.12)",
  },

  // Refined radius scale
  radius: {
    sm: "0.375rem", 
    md: "0.5rem",  
    lg: "0.75rem", 
    xl: "1rem", 
    full: "9999px",
  },

  // Refined transitions
  transitions: {
    fast: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
    default: "250ms cubic-bezier(0.16, 1, 0.3, 1)",
    slow: "350ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

// Container for the entire app
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: ${designSystem.spacing["2xl"]} ${designSystem.spacing.lg};
  min-height: 100vh;
  background-color: transparent; 
  font-family: ${designSystem.typography.fontFamily};
  color: ${designSystem.colors.text};
  
  @media (max-width: 768px) {
    padding: ${designSystem.spacing.xl} ${designSystem.spacing.lg};
  }
  
  @media (max-width: 480px) {
    padding: ${designSystem.spacing.lg} ${designSystem.spacing.md};
  }
`;

// Modern header with refined typography
export const Header = styled.header`
  width: 100%;
  text-align: center;
  margin-bottom: ${designSystem.spacing["2xl"]};
  
  h1 {
    font-size: ${designSystem.typography.fontSizes["3xl"]};
    font-weight: ${designSystem.typography.fontWeights.bold};
    color: ${designSystem.colors.text};
    margin-bottom: ${designSystem.spacing.xs};
    letter-spacing: ${designSystem.typography.letterSpacing.tight};
  }
  
  p {
    color: ${designSystem.colors.textSecondary};
    font-size: ${designSystem.typography.fontSizes.lg};
    font-weight: ${designSystem.typography.fontWeights.normal};
    line-height: ${designSystem.typography.lineHeights.relaxed};
  }
`;

// Modern input container with improved spacing
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-bottom: ${designSystem.spacing.xl};
  gap: ${designSystem.spacing.md};
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

// Refined text input field
export const TextField = styled.input`
  flex: 1;
  padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
  font-size: ${designSystem.typography.fontSizes.base};
  font-weight: ${designSystem.typography.fontWeights.normal};
  font-family: ${designSystem.typography.fontFamily};
  color: ${designSystem.colors.text};
  background-color: ${designSystem.colors.surface};
  border: 1px solid ${designSystem.colors.border};
  border-radius: ${designSystem.radius.md};
  box-shadow: ${designSystem.shadows.xs};
  outline: none;
  transition: all ${designSystem.transitions.fast};
  
  &:hover {
    border-color: ${designSystem.colors.borderHover};
  }
  
  &:focus {
    border-color: ${designSystem.colors.primary};
    box-shadow: ${designSystem.shadows.focus};
  }
  
  &::placeholder {
    color: ${designSystem.colors.textSecondary};
  }
`;

// Modern button with refined design
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${designSystem.spacing.md} ${designSystem.spacing.lg};
  font-size: ${designSystem.typography.fontSizes.base};
  font-weight: ${designSystem.typography.fontWeights.medium};
  font-family: ${designSystem.typography.fontFamily};
  color: ${designSystem.colors.surface};
  background-color: ${designSystem.colors.primary};
  border: none;
  border-radius: ${designSystem.radius.md};
  box-shadow: ${designSystem.shadows.xs};
  cursor: pointer;
  transition: all ${designSystem.transitions.fast};
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${designSystem.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus {
    box-shadow: ${designSystem.shadows.focus};
    outline: none;
  }
`;

// List container with improved spacing
export const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

// Modern list component
export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  h2 {
    font-size: ${designSystem.typography.fontSizes.xl};
    font-weight: ${designSystem.typography.fontWeights.semibold};
    margin-bottom: ${designSystem.spacing.lg};
    color: ${designSystem.colors.text};
    letter-spacing: ${designSystem.typography.letterSpacing.tight};
  }
`;

// Todo item container with improved spacing
export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${designSystem.spacing.md};
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Modernized todo item with refined design
export const ListBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "done",
})<{done: boolean}>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${designSystem.spacing.lg};
  background-color: ${({ done }) => (done ? designSystem.colors.done : designSystem.colors.surface)};
  border: 1px solid ${designSystem.colors.border};
  border-radius: ${designSystem.radius.md};
  box-shadow: ${designSystem.shadows.xs};
  margin-right: ${designSystem.spacing.md};
  transition: all ${designSystem.transitions.default};
  
  &:hover {
    box-shadow: ${designSystem.shadows.sm};
  }
  
  span {
    margin-left: ${designSystem.spacing.md};
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
    color: ${({ done }) => (done ? designSystem.colors.textSecondary : designSystem.colors.text)};
    transition: all ${designSystem.transitions.default};
    flex: 1;
    font-size: ${designSystem.typography.fontSizes.base};
    line-height: ${designSystem.typography.lineHeights.relaxed};
  }
  
  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ done }) => (done ? designSystem.colors.primary : designSystem.colors.textTertiary)};
    border-radius: ${designSystem.radius.sm};
    cursor: pointer;
    position: relative;
    transition: all ${designSystem.transitions.fast};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    
    &:checked {
      background-color: ${designSystem.colors.primary};
      border-color: ${designSystem.colors.primary};
      
      &:after {
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg) translate(-1px, -1px);
        left: 6px;
        top: 2px;
      }
    }
    
    &:hover {
      border-color: ${designSystem.colors.primary};
    }
    
    &:focus {
      box-shadow: ${designSystem.shadows.focus};
      outline: none;
    }
  }
  
  input[type="text"] {
    margin-left: ${designSystem.spacing.md};
    flex: 1;
    border: none;
    padding: ${designSystem.spacing.xs} ${designSystem.spacing.xs};
    font-size: ${designSystem.typography.fontSizes.base};
    font-family: ${designSystem.typography.fontFamily};
    color: ${designSystem.colors.text};
    background-color: transparent;
    border-bottom: 2px solid ${designSystem.colors.borderHover};
    outline: none;
    transition: all ${designSystem.transitions.fast};
    
    &:focus {
      border-bottom-color: ${designSystem.colors.primary};
    }
  }
  
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: ${designSystem.spacing.sm};
  }
`;

// Actions container with improved spacing
export const ActionsContainer = styled.div`
  display: flex;
  gap: ${designSystem.spacing.sm};
  
  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
    margin-top: ${designSystem.spacing.sm};
  }
`;

// Modern action button variants
export const ActionButton = styled(Button)<{ variant?: 'primary' | 'success' | 'danger' | 'secondary' }>`
  background-color: ${props => {
    switch(props.variant) {
      case 'success': return designSystem.colors.success;
      case 'danger': return designSystem.colors.danger;
      case 'secondary': return 'transparent';
      default: return designSystem.colors.primary;
    }
  }};
  color: ${props => props.variant === 'secondary' ? designSystem.colors.text : designSystem.colors.surface};
  border: ${props => props.variant === 'secondary' ? `1px solid ${designSystem.colors.border}` : 'none'};
  padding: ${designSystem.spacing.sm} ${designSystem.spacing.md};
  font-size: ${designSystem.typography.fontSizes.sm};
  font-weight: ${designSystem.typography.fontWeights.medium};
  box-shadow: ${props => props.variant === 'secondary' ? 'none' : designSystem.shadows.xs};
  
  &:hover {
    background-color: ${props => {
      switch(props.variant) {
        case 'success': return designSystem.colors.success + 'E6'; // 90% opacity
        case 'danger': return designSystem.colors.danger + 'E6';
        case 'secondary': return designSystem.colors.border;
        default: return designSystem.colors.primary + 'E6';
      }
    }};
  }
`;

// Empty state with refined styling
export const EmptyState = styled.div`
  text-align: center;
  padding: ${designSystem.spacing.xl};
  color: ${designSystem.colors.textSecondary};
  border: 1px dashed ${designSystem.colors.border};
  border-radius: ${designSystem.radius.lg};
  margin-top: ${designSystem.spacing.lg};
  
  p {
    margin-bottom: ${designSystem.spacing.md};
    line-height: ${designSystem.typography.lineHeights.relaxed};
    font-size: ${designSystem.typography.fontSizes.base};
  }
  
  &:first-child {
    font-weight: ${designSystem.typography.fontWeights.medium};
    font-size: ${designSystem.typography.fontSizes.lg};
  }
`;

// Global styles to add (can be imported in your index.css or App.css)
export const GlobalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
    width: 100%;
    background-color: #F5F7FA; /* Soft off-white/very light gray background for entire viewport */
    font-family: ${designSystem.typography.fontFamily};
    color: ${designSystem.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Alternative gradient background option:
  html, body {
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, #F9FAFB, #F3F4F6);
    font-family: ${designSystem.typography.fontFamily};
    color: ${designSystem.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  */
`;