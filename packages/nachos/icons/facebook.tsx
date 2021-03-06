// this component was automatically generated by IconGlyph.template.js
import React from 'react';
import { TestId } from '@trello/test-ids';

import { Icon, IconColor, IconSize } from '../src/components/Icon';

export interface GlyphProps {
  /**
   * A string that is applied as an aria attribute on the icon. Usually it
   * matches up with the display name of the icon
   * @default If no label is provided, it will fallback to the name of the icon
   */
  label?: string;
  /**
   * The color that the Icon should be rendered as.
   * @default @icon-default-color (#42526E)
   */
  color?: IconColor;
  /**
   * The size to render the Icon size.
   * @default "medium"
   */
  size?: IconSize;
  /**
   * A string that gets placed as a data attribute (data-test-id) onto the
   * Icon wrapper so that our
   * smoketest can properly target and test the component
   * @default undefined
   */
  testId?: TestId;
  // Escape hatches
  /**
   * ⚠️ DO NOT USE THIS PROP UNLESS YOU REALLY REALLY HAVE TO.
   *
   * Places a class name on the Icon (more specifically, the svg itself). This
   * is placed in addition to the classes already placed on the Icon. This is
   * placed directly onto the SVG via the glyph templates that are
   * generated by IconGlyph.template.js
   *
   * Please refrain from using this unless absolutely necessary.
   * @default undefined
   */
  dangerous_className?: string;
  /**
   * The switch for the icon to be centered in the dedicated space with padding around it.
   * Designed for cases when icon is not inline.
   */
  block?: boolean;
}

const FacebookIconGlyph = () => {
  return (
    <svg
      width="24"
      height="24"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0002 11.9999C22.0002 6.47658 17.5227 1.99905 11.9994 1.99905C6.47606 1.99905 1.99854 6.47658 1.99854 11.9999C1.99854 16.9916 5.6557 21.129 10.4367 21.8792V14.8908H7.89747V11.9999H10.4367V9.79658C10.4367 7.29012 11.9298 5.90563 14.2142 5.90563C15.3084 5.90563 16.4529 6.10096 16.4529 6.10096V8.5621H15.1918C13.9494 8.5621 13.562 9.33301 13.562 10.1239V11.9999H16.3357L15.8923 14.8908H13.562V21.8792C18.343 21.129 22.0002 16.9916 22.0002 11.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FacebookIcon: React.FunctionComponent<GlyphProps> = (props) => {
  const { testId, dangerous_className, size, color, label, block } = props;
  return (
    <Icon
      testId={testId}
      size={size}
      dangerous_className={dangerous_className}
      color={color}
      block={block}
      label={label || 'FacebookIcon'}
      glyph={FacebookIconGlyph}
    />
  );
};
