// // app.js
// const navLinks = document.querySelectorAll('a.nav-link');
// const main = document.getElementById('main');

// // Ensure body has an embedded class so embedded pages can adapt styles if they want
// document.body.classList.add('embedded');

// async function loadPage(url) {
//   try {
//     const res = await fetch(url, { cache: 'no-cache' });
//     const html = await res.text();

//     // Parse the fetched HTML so we can inject styles and execute scripts
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');

//     // Clear previous content (this also removes previously injected styles and scripts)
//     main.innerHTML = '';

//     // 1) Inject styles from <head> (style/link)
//     const headStyles = doc.head ? doc.head.querySelectorAll('style,link[rel="stylesheet"]') : [];
//     headStyles.forEach(node => {
//       const clone = node.cloneNode(true);
//       // If it's a <link>, make sure it's same-origin or absolute path works
//       main.appendChild(clone);
//     });

//     // 2) Inject body markup (without running scripts yet)
//     const bodyChildren = Array.from(doc.body ? doc.body.childNodes : []);
//     bodyChildren.forEach(node => {
//       // Scripts will be handled separately to ensure execution
//       if (node.tagName && node.tagName.toLowerCase() === 'script') return;
//       main.appendChild(node.cloneNode(true));
//     });

//     // 3) Recreate and execute scripts (including module and external)
//     const scripts = doc.querySelectorAll('script');
//     for (const oldScript of scripts) {
//       const s = document.createElement('script');
//       // Copy attributes
//       for (const { name, value } of Array.from(oldScript.attributes)) {
//         s.setAttribute(name, value);
//       }
//       // Inline code
//       if (!oldScript.src) {
//         s.textContent = oldScript.textContent || '';
//       }
//       // Append into main so DOM queries find the injected elements
//       main.appendChild(s);
//       // If script has src, the browser will fetch and execute it. Inline will execute immediately.
//     }
//   } catch (error) {
//     console.error('Error fetching the page:', error);
//     main.innerHTML = '<div class="p-3 text-danger">페이지를 불러오는 중 오류가 발생했습니다.</div>';
//   }
// }

// navLinks.forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const url = link.getAttribute('href');
//     if (!url) return;
//     loadPage(url);
//   });
// });

// // Optionally auto-load first link on page load
// // if (navLinks[0]) loadPage(navLinks[0].getAttribute('href'));