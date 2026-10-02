package ru.yandex.practicum.sleeptracker;

public class SleepAnalysisResult<T> {
    private String descriptionResult;
    private T result;

    public SleepAnalysisResult(String descriptionResult, T result) {
        this.descriptionResult = descriptionResult;
        this.result = result;
    }

    public String getDescriptionResult() {
        return descriptionResult;
    }

    public T getResult() {
        return result;
    }
}
