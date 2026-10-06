// Main App Logic

// Render communities grid
function renderCommunities(communitiesToRender = communities) {
    const grid = document.getElementById('communitiesGrid');

    if (communitiesToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">Землячества не найдены</p>';
        return;
    }

    grid.innerHTML = communitiesToRender.map(community => `
        <div class="community-card" data-id="${community.id}">
            <div class="community-icon-wrapper">
                <div class="community-icon" style="color: ${community.theme.primary}">
                    ${communityIcons[community.id] || ''}
                </div>
            </div>

            <div class="community-flag">${community.flag}</div>
            <h3 class="community-name">${community.name}</h3>
            <p class="community-region">${community.region}</p>

            <div class="community-stats">
                <div class="community-stat">
                    <span>👥</span>
                    <span>${community.members_count} участников</span>
                </div>
                <div class="community-stat">
                    <span>📅</span>
                    <span>с ${community.year_founded}</span>
                </div>
            </div>

            <p class="community-description">${community.description}</p>

            <button class="join-button" onclick="openJoinModal(event, '${community.id}')">
                Вступить
            </button>
        </div>
    `).join('');

    // Add click handlers to cards
    document.querySelectorAll('.community-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('join-button')) {
                const id = card.dataset.id;
                window.location.href = `community.html?id=${id}`;
            }
        });
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = communities.filter(c =>
            c.name.toLowerCase().includes(query) ||
            c.region.toLowerCase().includes(query) ||
            c.nameEn.toLowerCase().includes(query)
        );
        renderCommunities(filtered);
    });
}

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const wasActive = item.classList.contains('active');

        // Close all
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        // Open clicked if it wasn't active
        if (!wasActive) {
            item.classList.add('active');
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'var(--bg-primary)';
        nav.style.flexDirection = 'column';
        nav.style.padding = '1rem';
        nav.style.borderTop = '1px solid var(--border)';
    });
}

// Join Modal
const joinModal = document.getElementById('joinModal');
const modalClose = document.querySelector('.modal-close');

function openJoinModal(event, communityId) {
    event.stopPropagation();
    const community = communities.find(c => c.id === communityId);
    if (!community) return;

    document.getElementById('communityId').value = communityId;
    document.querySelector('.modal-content h2').textContent = `Вступить в ${community.name}`;

    joinModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeJoinModal() {
    joinModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.getElementById('joinForm').reset();
}

if (modalClose) {
    modalClose.addEventListener('click', closeJoinModal);
}

// Close modal on background click
joinModal?.addEventListener('click', (e) => {
    if (e.target === joinModal) {
        closeJoinModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && joinModal?.classList.contains('active')) {
        closeJoinModal();
    }
});

// Join form submission
const joinForm = document.getElementById('joinForm');
if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const communityId = document.getElementById('communityId').value;
        const community = communities.find(c => c.id === communityId);
        const fullName = document.getElementById('fullName').value;
        const course = document.getElementById('course').value;
        const telegram = document.getElementById('telegram').value;
        const whatsapp = document.getElementById('whatsapp').value || 'не указан';
        const comment = document.getElementById('comment').value || 'нет комментария';

        // Format message for coordinator
        const message = `🎓 Новая заявка в ${community.name}

👤 Имя: ${fullName}
📚 Курс: ${course}
📱 Telegram: ${telegram}
📞 WhatsApp: ${whatsapp}
💬 Комментарий: ${comment}

---
Заявка отправлена через сайт землячеств МГСУ`;

        // Create Telegram link
        const telegramUrl = `https://t.me/mgsuapp?text=${encodeURIComponent(message)}`;

        // Show success message
        alert(`Заявка принята! Сейчас откроется Telegram для отправки сообщения председателю.

После отправки сообщения, председатель ${community.name} свяжется с вами в течение 24 часов.`);

        // Open Telegram
        window.open(telegramUrl, '_blank');

        // Close modal
        closeJoinModal();
    });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCommunities();
});
