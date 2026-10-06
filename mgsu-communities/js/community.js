// Community Page Logic

// Get community ID from URL
const urlParams = new URLSearchParams(window.location.search);
const communityId = urlParams.get('id');
window.currentCommunityId = communityId;

// Find community data
const community = communities.find(c => c.id === communityId);

if (!community) {
    window.location.href = 'index.html';
} else {
    // Populate page content
    document.getElementById('heroFlag').textContent = community.flag;
    document.getElementById('heroTitle').textContent = community.name;
    document.getElementById('heroRegion').textContent = community.region;
    document.getElementById('heroMembers').textContent = `${community.members_count} участников`;
    document.getElementById('heroYear').textContent = `с ${community.year_founded} года`;

    // Add large background icon
    const heroSection = document.getElementById('communityHero');
    if (communityIcons[community.id]) {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'community-hero-icon';
        iconDiv.style.color = community.theme.primary;
        iconDiv.innerHTML = communityIcons[community.id];
        heroSection.insertBefore(iconDiv, heroSection.firstChild);
    }

    document.getElementById('fullDescription').textContent = community.fullDescription;

    // Activities
    const activitiesList = document.getElementById('activitiesList');
    activitiesList.innerHTML = community.activities.map(activity =>
        `<li>${activity}</li>`
    ).join('');

    // Coordinator
    document.getElementById('coordinatorName').textContent = community.coordinator.name;
    const telegramLink = document.getElementById('coordinatorTelegram');
    telegramLink.textContent = community.coordinator.telegram;
    telegramLink.href = `https://t.me/${community.coordinator.telegram.replace('@', '')}`;

    // Social links
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = `
        <a href="${community.social_links.telegram}" target="_blank" class="social-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0034 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92176 4.44061 8.37485 5.27072 7.03255C6.10083 5.69025 7.28825 4.60557 8.7 3.89997C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47086C20.0052 6.94693 20.885 8.91568 21 11V11.5Z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span>Группа в Telegram</span>
        </a>
    `;

    // Apply theme colors
    const heroSection = document.getElementById('communityHero');
    heroSection.classList.add(community.id);
    heroSection.style.setProperty('--theme-primary', community.theme.primary);
    heroSection.style.setProperty('--theme-secondary', community.theme.secondary);

    const pattern = heroSection.querySelector('.community-pattern');
    pattern.style.color = community.theme.primary;

    // Update page title
    document.title = `${community.name} - Землячества НИУ МГСУ`;
}

// Modal functionality
const joinModal = document.getElementById('joinModal');
const modalClose = document.querySelector('.modal-close');

function openJoinModal(event, communityId) {
    if (event) event.preventDefault();

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

modalClose.addEventListener('click', closeJoinModal);

joinModal.addEventListener('click', (e) => {
    if (e.target === joinModal) {
        closeJoinModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && joinModal.classList.contains('active')) {
        closeJoinModal();
    }
});

// Join form submission
const joinForm = document.getElementById('joinForm');
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const communityId = document.getElementById('communityId').value;
    const community = communities.find(c => c.id === communityId);
    const fullName = document.getElementById('fullName').value;
    const course = document.getElementById('course').value;
    const telegram = document.getElementById('telegram').value;
    const whatsapp = document.getElementById('whatsapp').value || 'не указан';
    const comment = document.getElementById('comment').value || 'нет комментария';

    const message = `🎓 Новая заявка в ${community.name}

👤 Имя: ${fullName}
📚 Курс: ${course}
📱 Telegram: ${telegram}
📞 WhatsApp: ${whatsapp}
💬 Комментарий: ${comment}

---
Заявка отправлена через сайт землячеств МГСУ`;

    const telegramUrl = `https://t.me/mgsuapp?text=${encodeURIComponent(message)}`;

    alert(`Заявка принята! Сейчас откроется Telegram для отправки сообщения председателю.

После отправки сообщения, председатель ${community.name} свяжется с вами в течение 24 часов.`);

    window.open(telegramUrl, '_blank');
    closeJoinModal();
});
