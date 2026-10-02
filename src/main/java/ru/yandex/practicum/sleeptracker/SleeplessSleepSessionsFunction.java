package ru.yandex.practicum.sleeptracker;

import java.time.Period;
import java.util.List;
import java.util.function.Function;
import java.util.stream.IntStream;

public class SleeplessSleepSessionsFunction implements Function<List<SleepingSession>, SleepAnalysisResult<Long>> {
    @Override
    public SleepAnalysisResult<Long> apply(List<SleepingSession> sessions) {

        List<SleepingSession> sortedSessions = sessions.stream()
                .sorted((session1, session2) ->
                        session1.getTimeFallSleep().compareTo(session2.getTimeFallSleep()))
                .toList();

        long sleeplessNights = IntStream.range(0, sortedSessions.size() - 1)
                .mapToLong(i -> {
                    SleepingSession current = sortedSessions.get(i);
                    SleepingSession next = sortedSessions.get(i + 1);

                    return Period.between(
                            current.getTimeWakeUp().toLocalDate(),
                            next.getTimeFallSleep().toLocalDate()
                    ).getDays();
                })
                .sum();

        return new SleepAnalysisResult<>(
            "Количество бессонных ночей",
            sleeplessNights
        );
    }
}
