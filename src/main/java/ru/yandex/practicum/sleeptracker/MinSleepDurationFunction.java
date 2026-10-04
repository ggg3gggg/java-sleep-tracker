package ru.yandex.practicum.sleeptracker;

import java.time.Duration;
import java.util.List;
import java.util.function.Function;

public class MinSleepDurationFunction
        implements Function<List<SleepingSession>, SleepAnalysisResult<Long>> {

    private static final String DESCRIPTION = "Минимальная продолжительность сна";

    @Override
    public SleepAnalysisResult<Long> apply(List<SleepingSession> sessions) {
        long minDuration = sessions.stream()
                .mapToLong(session -> Duration.between(
                        session.getTimeFallSleep(),
                        session.getTimeWakeUp()
                ).toMinutes())
                .min()
                .orElse(0);

        return new SleepAnalysisResult<>(
                DESCRIPTION,
                minDuration
        );
    }
}