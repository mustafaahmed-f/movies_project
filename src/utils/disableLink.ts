//// Fucntion used to disallow multiple navigation to the same link concurrently

export function disableLink(e: any) {
  if (window.location.pathname === e.currentTarget.getAttribute("href"))
    e.preventDefault();
}
