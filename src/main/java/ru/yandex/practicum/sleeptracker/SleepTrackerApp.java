package ru.yandex.practicum.sleeptracker;

import java.io.IOException;
import java.util.List;
import java.util.function.Function;

public class SleepTrackerApp {

    public static void main(String[] args) throws IOException {
        SleepLogLoader loader = new SleepLogLoader();
        List<SleepingSession> sessions = loader.load(args[0]);

        List<Function<List<SleepingSession>, ? extends SleepAnalysisResult<?>>> functions = List.of(
                new TotalSleepSessionsFunction(),
                new MinSleepDurationFunction(),
                new MaxSleepDurationFunction(),
                new AverageSleepDurationFunction(),
                new BadSleepSessionsFunction(),
                new SleeplessSleepSessionsFunction(),
                new ChronotypeFunction()
        );

        for (Function<List<SleepingSession>, ? extends SleepAnalysisResult<?>> function : functions) {
            SleepAnalysisResult<?> result = function.apply(sessions);
            System.out.println(result.getDescriptionResult() + ": " + result.getResult());
        }
    }
}