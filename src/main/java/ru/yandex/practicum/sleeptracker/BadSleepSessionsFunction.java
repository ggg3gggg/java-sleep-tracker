package ru.yandex.practicum.sleeptracker;

import java.util.List;
import java.util.function.Function;

public class BadSleepSessionsFunction implements Function<List<SleepingSession>, SleepAnalysisResult<Long>> {

    private static final String DESCRIPTION = "Количество сессий с плохим качеством сна.";

    @Override
    public SleepAnalysisResult<Long> apply(List<SleepingSession> sessions) {
        long badSessions = sessions.stream()
                .filter(session -> session.getSleepQuality() == SleepQuality.BAD)
                .count();

        return new SleepAnalysisResult<>(
                DESCRIPTION,
                badSessions
        );
    }
}
