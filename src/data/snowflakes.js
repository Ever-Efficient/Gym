/**
 * Pure SVG vectors of authentic 6-fold symmetrical ice crystals (snowflakes).
 * Designed with crystalline geometry, delicate branching, and icy hues.
 */

// 1. Classic Stellar Dendrite (Intricate branching chevron arms)
export const SNOWFLAKE_DENDRITE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120" width="120" height="120">
  <defs>
    <g id="arm1">
      <line x1="0" y1="0" x2="0" y2="-52" stroke="#d5f2fc" stroke-width="2.6" stroke-linecap="round"/>
      <line x1="0" y1="-16" x2="-13" y2="-27" stroke="#bce8f8" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="-16" x2="13" y2="-27" stroke="#bce8f8" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="-32" x2="-14" y2="-43" stroke="#bce8f8" stroke-width="2" stroke-linecap="round"/>
      <line x1="0" y1="-32" x2="14" y2="-43" stroke="#bce8f8" stroke-width="2" stroke-linecap="round"/>
      <line x1="-7" y1="-38" x2="-14" y2="-38" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="7" y1="-38" x2="14" y2="-38" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="0" cy="-52" r="2.2" fill="#ffffff"/>
    </g>
  </defs>
  <circle cx="0" cy="0" r="4.5" fill="#ffffff"/>
  <use href="#arm1"/>
  <use href="#arm1" transform="rotate(60)"/>
  <use href="#arm1" transform="rotate(120)"/>
  <use href="#arm1" transform="rotate(180)"/>
  <use href="#arm1" transform="rotate(240)"/>
  <use href="#arm1" transform="rotate(300)"/>
</svg>`;

// 2. Fernlike Star Crystal (Feathery pine-needle branching with central hexagon)
export const SNOWFLAKE_FERN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120" width="120" height="120">
  <defs>
    <g id="arm2">
      <line x1="0" y1="0" x2="0" y2="-50" stroke="#c0ebfa" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="0" y1="-12" x2="-9" y2="-19" stroke="#9ee0f5" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-12" x2="9" y2="-19" stroke="#9ee0f5" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-22" x2="-13" y2="-31" stroke="#9ee0f5" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-22" x2="13" y2="-31" stroke="#9ee0f5" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-34" x2="-11" y2="-43" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-34" x2="11" y2="-43" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="0" cy="-50" r="1.8" fill="#ffffff"/>
    </g>
  </defs>
  <polygon points="0,-7 6,-3.5 6,3.5 0,7 -6,3.5 -6,-3.5" fill="none" stroke="#d5f2fc" stroke-width="1.6"/>
  <circle cx="0" cy="0" r="2.8" fill="#ffffff"/>
  <use href="#arm2"/>
  <use href="#arm2" transform="rotate(60)"/>
  <use href="#arm2" transform="rotate(120)"/>
  <use href="#arm2" transform="rotate(180)"/>
  <use href="#arm2" transform="rotate(240)"/>
  <use href="#arm2" transform="rotate(300)"/>
</svg>`;

// 3. Diamond Plate Crystal (Sharp crystalline facets and diamond kite tips)
export const SNOWFLAKE_DIAMOND = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120" width="120" height="120">
  <defs>
    <g id="arm3">
      <line x1="0" y1="0" x2="0" y2="-48" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
      <polygon points="0,-24 -7,-32 0,-40 7,-32" fill="none" stroke="#c0ebfa" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="0" y1="-14" x2="-8" y2="-20" stroke="#bce8f8" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-14" x2="8" y2="-20" stroke="#bce8f8" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-40" x2="-6" y2="-45" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="0" y1="-40" x2="6" y2="-45" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
    </g>
  </defs>
  <polygon points="0,-5 4.33,-2.5 4.33,2.5 0,5 -4.33,2.5 -4.33,-2.5" fill="#d5f2fc"/>
  <use href="#arm3"/>
  <use href="#arm3" transform="rotate(60)"/>
  <use href="#arm3" transform="rotate(120)"/>
  <use href="#arm3" transform="rotate(180)"/>
  <use href="#arm3" transform="rotate(240)"/>
  <use href="#arm3" transform="rotate(300)"/>
</svg>`;

export const SNOWFLAKE_SVGS = [
  SNOWFLAKE_DENDRITE,
  SNOWFLAKE_FERN,
  SNOWFLAKE_DIAMOND,
];
