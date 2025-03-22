// app/components/Header/ItemHeader.tsx
import { ItemHeader as StyledItemHeader } from "./styles";

type ItemHeaderProps = {
  children: React.ReactNode;
};

export default function ItemHeader({ children }: ItemHeaderProps) {
  return <StyledItemHeader>{children}</StyledItemHeader>;
}