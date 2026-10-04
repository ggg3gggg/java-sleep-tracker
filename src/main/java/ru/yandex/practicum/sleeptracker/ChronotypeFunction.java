package ru.yandex.practicum.sleeptracker;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.function.Function;

public class ChronotypeFunction
        implements Function<List<SleepingSession>, SleepAnalysisResult<Chronotype>> {

    private static final String DESCRIPTION = "Хронотип";

    @Override
    public SleepAnalysisResult<Chronotype> apply(List<SleepingSession> sessions) {
        int owls = 0;
        int larks = 0;
        int pigeons = 0;

        for (SleepingSession session : sessions) {
            LocalDateTime sleepTime = session.getTimeFallSleep();
            LocalDateTime wakeUpTime = session.getTimeWakeUp();

            if (sleepTime.toLocalDate().equals(wakeUpTime.toLocalDate())) {
                continue;
            }

            if (sleepTime.toLocalTime().isAfter(LocalTime.of(23, 0))
                    && wakeUpTime.toLocalTime().isAfter(LocalTime.of(9, 0))) {
                owls++;
            } else if (sleepTime.toLocalTime().isBefore(LocalTime.of(22, 0))
                    && wakeUpTime.toLocalTime().isBefore(LocalTime.of(7, 0))) {
                larks++;
            } else {
                pigeons++;
            }
        }

        Chronotype result;

        if (owls > larks) {
            result = Chronotype.OWL;
        } else if (larks > owls) {
            result = Chronotype.LARK;
        } else {
            result = Chronotype.PIGEON;
        }

        return new SleepAnalysisResult<>(
                DESCRIPTION,
            result
        );
    }
}
