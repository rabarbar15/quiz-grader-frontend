import { Badge } from '@radix-ui/themes';

type BadgeColor = 'green' | 'orange' | 'blue';

interface BadgeProps {
  variant?: 'complete' | 'pending' | 'unopened';
}

const StatusBadge = ({ variant = 'pending' }: BadgeProps) => {
  const colorVariantClasses: Record<string, BadgeColor> = {
    complete: 'green',
    pending: 'orange',
    unopened: 'blue',
  };
  const labelVariantClasses = {
    complete: 'Oceniony',
    pending: 'W trakcie',
    unopened: 'Oczekujący',
  };
  return (
    <Badge color={colorVariantClasses[variant]}>
      {labelVariantClasses[variant]}
    </Badge>
  );
};

export default StatusBadge;
