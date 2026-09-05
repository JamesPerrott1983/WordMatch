/* Word Match — cloud configuration.
   These two values are SAFE to be public — the publishable key only allows
   what your database Row-Level-Security policies allow (public read,
   teacher-only write). Real security comes from the teacher login + RLS.
 
   If this file is missing, the game runs in local-only mode. */
window.WM_CONFIG = {
  url: "https://mqgrdakzvsqzidjjkeiw.supabase.co",
  anonKey: "sb_publishable_OweMmJY8KfRn1_AGRQ32Wg_NXq-sh6W"
};
