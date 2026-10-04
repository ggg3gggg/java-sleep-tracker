package ru.yandex.practicum.sleeptracker;


import java.util.List;
import java.util.function.Function;

public class TotalSleepSessionsFunction
        implements Function<List<SleepingSession>, SleepAnalysisResult<Integer>> {

    private static final String DESCRIPTION = "Количество сессий сна";

    @Override
    public SleepAnalysisResult<Integer> apply(List<SleepingSession> sessions) {
        return new SleepAnalysisResult<>(
                DESCRIPTION,
                sessions.size()
        );
    }
}
