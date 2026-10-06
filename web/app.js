class SleepTrackerApp {
    constructor() {
        this.sessions = [];
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById('fileInput').addEventListener('change', (e) => this.handleFileUpload(e));
        document.getElementById('sleepForm').addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                this.parseCSV(e.target.result);
                this.analyze();
            } catch (error) {
                alert('Ошибка при чтении файла: ' + error.message);
            }
        };
        reader.readAsText(file);
    }

    parseCSV(content) {
        const lines = content.trim().split('\n');
        this.sessions = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const parts = line.split(',');
            if (parts.length >= 4) {
                this.sessions.push({
                    date: parts[0].trim(),
                    bedTime: parts[1].trim(),
                    wakeTime: parts[2].trim(),
                    quality: parts[3].trim().toUpperCase()
                });
            }
        }
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const bedTime = document.getElementById('bedTime').value;
        const wakeTime = document.getElementById('wakeTime').value;
        const quality = document.getElementById('quality').value;

        this.sessions.push({ date, bedTime, wakeTime, quality });
        this.analyze();

        event.target.reset();
    }

    calculateDuration(bedTime, wakeTime) {
        const [bedHour, bedMin] = bedTime.split(':').map(Number);
        const [wakeHour, wakeMin] = wakeTime.split(':').map(Number);

        let bedMinutes = bedHour * 60 + bedMin;
        let wakeMinutes = wakeHour * 60 + wakeMin;

        if (wakeMinutes < bedMinutes) {
            wakeMinutes += 24 * 60;
        }

        return wakeMinutes - bedMinutes;
    }

    formatDuration(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}ч ${mins}м`;
    }

    analyze() {
        if (this.sessions.length === 0) return;

        const durations = this.sessions.map(s => this.calculateDuration(s.bedTime, s.wakeTime));

        const totalSessions = this.sessions.length;
        const minDuration = Math.min(...durations);
        const maxDuration = Math.max(...durations);
        const avgDuration = Math.round(durations.reduce((a, b) => a + b, 0) / durations.length);

        const badSessions = this.sessions.filter(s =>
            s.quality === 'BAD' || s.quality === 'TERRIBLE'
        ).length;

        const chronotype = this.determineChronotype();

        document.getElementById('totalSessions').textContent = totalSessions;
        document.getElementById('avgDuration').textContent = this.formatDuration(avgDuration);
        document.getElementById('minDuration').textContent = this.formatDuration(minDuration);
        document.getElementById('maxDuration').textContent = this.formatDuration(maxDuration);
        document.getElementById('badSessions').textContent = badSessions;
        document.getElementById('chronotype').textContent = chronotype.type;
        document.getElementById('chronotypeDesc').textContent = chronotype.description;

        this.renderTable();
        this.renderChart(durations);

        document.getElementById('resultsSection').style.display = 'block';
        document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
    }

    determineChronotype() {
        const bedTimes = this.sessions.map(s => {
            const [hour, min] = s.bedTime.split(':').map(Number);
            return hour + min / 60;
        });

        const avgBedTime = bedTimes.reduce((a, b) => a + b, 0) / bedTimes.length;

        if (avgBedTime < 22) {
            return {
                type: 'Жаворонок',
                description: 'Вы ложитесь рано и встаёте рано'
            };
        } else if (avgBedTime >= 22 && avgBedTime < 24) {
            return {
                type: 'Голубь',
                description: 'У вас нормальный режим сна'
            };
        } else {
            return {
                type: 'Сова',
                description: 'Вы ложитесь поздно и встаёте поздно'
            };
        }
    }

    renderTable() {
        const tbody = document.getElementById('sessionsTableBody');
        tbody.innerHTML = '';

        this.sessions.forEach(session => {
            const duration = this.calculateDuration(session.bedTime, session.wakeTime);
            const row = document.createElement('tr');

            const qualityMap = {
                'EXCELLENT': 'отличное',
                'GOOD': 'хорошее',
                'NORMAL': 'нормальное',
                'BAD': 'плохое',
                'TERRIBLE': 'ужасное'
            };

            row.innerHTML = `
                <td>${this.formatDate(session.date)}</td>
                <td>${session.bedTime}</td>
                <td>${session.wakeTime}</td>
                <td>${this.formatDuration(duration)}</td>
                <td>
                    <span class="quality-badge quality-${session.quality.toLowerCase()}">
                        ${qualityMap[session.quality] || session.quality}
                    </span>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    renderChart(durations) {
        const canvas = document.getElementById('sleepChart');
        const ctx = canvas.getContext('2d');

        canvas.width = canvas.offsetWidth;
        canvas.height = 300;

        const padding = 40;
        const width = canvas.width - padding * 2;
        const height = canvas.height - padding * 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const maxDuration = Math.max(...durations);
        const barWidth = width / durations.length - 10;

        ctx.fillStyle = '#9ca3af';
        ctx.font = '12px sans-serif';

        for (let i = 0; i <= 5; i++) {
            const y = padding + (height / 5) * i;
            const value = Math.round(maxDuration - (maxDuration / 5) * i);
            const hours = Math.floor(value / 60);

            ctx.fillText(hours + 'ч', 5, y + 4);
            ctx.strokeStyle = '#2d3748';
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
            ctx.stroke();
        }

        durations.forEach((duration, index) => {
            const barHeight = (duration / maxDuration) * height;
            const x = padding + index * (barWidth + 10);
            const y = canvas.height - padding - barHeight;

            const gradient = ctx.createLinearGradient(0, y, 0, canvas.height - padding);
            gradient.addColorStop(0, '#6366f1');
            gradient.addColorStop(1, '#8b5cf6');

            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, barWidth, barHeight);

            ctx.fillStyle = '#9ca3af';
            ctx.font = '10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(index + 1, x + barWidth / 2, canvas.height - padding + 20);
        });

        ctx.fillStyle = '#e8ecf4';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Сессии', canvas.width / 2, canvas.height - 5);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SleepTrackerApp();
});
