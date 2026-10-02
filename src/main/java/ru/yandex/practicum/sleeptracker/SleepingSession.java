package ru.yandex.practicum.sleeptracker;

import java.time.LocalDateTime;

public class SleepingSession {   //хранит информацию об одной сессии сна.
    private LocalDateTime timeFallSleep;
    private LocalDateTime timeWakeUp;
    private SleepQuality sleepQuality;

    public SleepingSession(LocalDateTime timeFallSleep, LocalDateTime timeWakeUp, SleepQuality sleepQuality) {
        this.timeFallSleep = timeFallSleep;
        this.timeWakeUp = timeWakeUp;
        this.sleepQuality = sleepQuality;
    }

    public LocalDateTime getTimeFallSleep() {
        return timeFallSleep;
    }

    public LocalDateTime getTimeWakeUp() {
        return timeWakeUp;
    }

    public SleepQuality getSleepQuality() {
        return sleepQuality;
    }
}

