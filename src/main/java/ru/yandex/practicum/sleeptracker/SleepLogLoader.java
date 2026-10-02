package ru.yandex.practicum.sleeptracker;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

public class SleepLogLoader {  //отвечает за загрузку данных из файла лога.
    public List<SleepingSession> load(String fileName) throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader(fileName));
        DateTimeFormatter formatter =
                DateTimeFormatter.ofPattern("dd.MM.yy HH:mm");

        List<SleepingSession> sessions = reader.lines()
                .map(line -> {
                    String[] parts = line.split(";");

                    LocalDateTime.parse(parts[0], formatter);
                    LocalDateTime.parse(parts[1], formatter);
                    SleepQuality.valueOf(parts[2]);

                    return new SleepingSession(
                            LocalDateTime.parse(parts[0],formatter),
                            LocalDateTime.parse(parts[1],formatter),
                            SleepQuality.valueOf(parts[2])
                    );
                })
                .collect(Collectors.toList());

        return sessions;
    }
}
