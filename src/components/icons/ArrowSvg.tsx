import * as React from 'react';

function ArrowSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" {...props}>
      <path
        fill="currentColor"
        d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z"
      />
    </svg>
  );
}
//okay
export default ArrowSvg;
