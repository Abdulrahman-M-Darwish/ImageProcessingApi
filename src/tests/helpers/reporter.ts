import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption,
} from 'jasmine-spec-reporter';
import suiteInfo = jasmine.JasmineStartedInfo;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: suiteInfo, log: string): string {
    return `WD_${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
