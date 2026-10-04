package ru.yandex.practicum.sleeptracker;

import java.time.Duration;
import java.util.List;
import java.util.function.Function;

public class AverageSleepDurationFunction
        implements Function<List<SleepingSession>, SleepAnalysisResult<Double>> {

    private static final String DESCRIPTION = "Средняя продолжительность сна";

    @Override
    public SleepAnalysisResult<Double> apply(List<SleepingSession> sessions) {
        double averageDuration = sessions.stream()
                .mapToLong(session -> Duration.between(
                        session.getTimeFallSleep(),
                        session.getTimeWakeUp()
                ).toMinutes())
                .average()
                .orElse(0);

        return new SleepAnalysisResult<>(
                DESCRIPTION,
                averageDuration
        );
    }
}