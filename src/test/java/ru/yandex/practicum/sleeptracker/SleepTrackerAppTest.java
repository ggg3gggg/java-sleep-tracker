package ru.yandex.practicum.sleeptracker;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SleepTrackerAppTest {
    @Test
    void shouldReturnZeroSleeplessNights() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 7, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 2, 23, 0);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 3, 7, 0);

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session1);          //01.10 23:00 → 02.10 07:00
        sessions.add(session2);        // 02.10 23:00 → 03.10 07:00

        SleeplessSleepSessionsFunction function = new SleeplessSleepSessionsFunction();
        SleepAnalysisResult<Long> result = function.apply(sessions);
        assertEquals(0, result.getResult());
    }

    @Test
    void shouldReturnOneSleeplessNight() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 7, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 3, 23, 0);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 4, 7, 0);

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session1);          //01.10 23:00 → 02.10 07:00
        sessions.add(session2);        // 03.10 23:00 → 04.10 07:00

        SleeplessSleepSessionsFunction function = new SleeplessSleepSessionsFunction();
        SleepAnalysisResult<Long> result = function.apply(sessions);
        assertEquals(1, result.getResult());
    }

    @Test
    void shouldReturnTwoSleeplessNight() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 7, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 4, 23, 0);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 5, 7, 0);

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session1);          //01.10 23:00 → 02.10 07:00
        sessions.add(session2);        // 04.10 23:00 → 05.10 07:00

        SleeplessSleepSessionsFunction function = new SleeplessSleepSessionsFunction();
        SleepAnalysisResult<Long> result = function.apply(sessions);
        assertEquals(2, result.getResult());
    }

    @Test
    void shouldReturnTwoSleeplessNightsWhenSessionsAreUnsorted() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 7, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 4, 23, 0);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 5, 7, 0);

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session2);
        sessions.add(session1);

        SleeplessSleepSessionsFunction function = new SleeplessSleepSessionsFunction();
        SleepAnalysisResult<Long> result = function.apply(sessions);
        assertEquals(2, result.getResult());
    }

    @Test // Сова — OWL
    void checkTheBehaviorOfTheNightOwlChronotype() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 30);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 10, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        sessions.add(session1);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.OWL, result.getResult());
    }

    @Test // Жаворонок — LARK
    void checkTheBehaviorOfTheNightLarkChronotype() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 21, 30);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 6, 30);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        sessions.add(session1);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.LARK, result.getResult());
    }

    @Test // Голубь — PIGEON
    void checkTheBehaviorOfTheNightPigeonChronotype() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 22, 30);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 8, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        sessions.add(session1);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.PIGEON, result.getResult());
    }

    @Test // Равное количество сов и жаворонков → PIGEON
    void checkTheNumberOfOwlsAndLarksIsTheSame() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 30);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 10, 0);

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 1, 21, 30);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 2, 6, 30);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session1);
        sessions.add(session2);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.PIGEON, result.getResult());
    }

    @Test // Равное количество сов и жаворонков → PIGEON
    void checkOneDaySession() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 12, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 1, 15, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        sessions.add(session1);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.PIGEON, result.getResult());
    }

    @Test // Равное количество сов и жаворонков → PIGEON
    void checkTwoDaySession() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 12, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 1, 15, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 1, 23, 30);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 2, 10, 0);

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session1);
        sessions.add(session2);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.OWL, result.getResult());
    }

    @Test //Граничные значени
    void checkTheBoundariesOfTheConditions() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 23, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 2, 10, 0);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        LocalDateTime sleep2 = LocalDateTime.of(2026, 10, 1, 22, 30);
        LocalDateTime wakeUp2 = LocalDateTime.of(2026, 10, 2, 7, 0);

        SleepingSession session2 = new SleepingSession(
                sleep2,
                wakeUp2,
                SleepQuality.GOOD
        );

        sessions.add(session1);
        sessions.add(session2);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.PIGEON, result.getResult());
    }

    @Test //Граничные значени
    void check() {
        List<SleepingSession> sessions = new ArrayList<>();
        LocalDateTime sleep1 = LocalDateTime.of(2026, 10, 1, 5, 0);
        LocalDateTime wakeUp1 = LocalDateTime.of(2026, 10, 1, 6, 30);

        SleepingSession session1 = new SleepingSession(
                sleep1,
                wakeUp1,
                SleepQuality.GOOD
        );

        sessions.add(session1);

        ChronotypeFunction function = new ChronotypeFunction();
        SleepAnalysisResult<Chronotype> result = function.apply(sessions);
        assertEquals(Chronotype.PIGEON, result.getResult());
    }

    @Test //Граничные значени
    void checkLogFile() throws IOException {
        SleepLogLoader loader = new SleepLogLoader();
        List<SleepingSession> sessions = loader.load("src/test/test-sleep-log.txt");

        assertEquals(2, sessions.size());
        assertEquals(SleepQuality.GOOD, sessions.get(0).getSleepQuality());
    }



}