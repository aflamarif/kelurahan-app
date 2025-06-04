// --- Login Page Logic ---
const loginForm = document.getElementById('loginForm');
const errorDiv = document.getElementById('error');

if(loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validasi statis demo
    if(username === 'admin' && password === '1234') {
      // Simpan login status di sessionStorage
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('username', username);
      window.location.href = 'dashboard.html';
    } else {
      errorDiv.textContent = 'Username atau password salah!';
    }
  });
}

// --- Dashboard Logic ---
const pages = document.querySelectorAll('.page');

function showPage(pageId) {
  pages.forEach(page => {
    if(page.id === pageId) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

// Logout function
function logout() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}

// Cek login status di dashboard, redirect ke login kalau belum login
if(window.location.pathname.endsWith('dashboard.html')) {
  if(sessionStorage.getItem('loggedIn') !== 'true') {
    alert('Silakan login terlebih dahulu!');
    window.location.href = 'index.html';
  } else {
    // Tampilkan username di header kalau mau (opsional)
    const username = sessionStorage.getItem('username');
    // Bisa ditambahkan ke header jika mau
  }
}

// --- Pengaduan Form Submit ---
const pengaduanForm = document.getElementById('pengaduanForm');
const statusPengaduan = document.getElementById('statusPengaduan');

if(pengaduanForm) {
  pengaduanForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const isi = document.getElementById('isiPengaduan').value.trim();

    if(isi.length < 10) {
      statusPengaduan.style.color = 'red';
      statusPengaduan.textContent = 'Pengaduan terlalu singkat, minimal 10 karakter.';
      return;
    }

    // Simulasi kirim data pengaduan
    setTimeout(() => {
      statusPengaduan.style.color = 'green';
      statusPengaduan.textContent = 'Pengaduan berhasil dikirim. Terima kasih!';
      pengaduanForm.reset();
    }, 1000);
  });
}
