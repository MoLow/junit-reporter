module.exports = {
  stdout: `::debug::starting to run tests
::debug::starting to run is ok
::debug::completed running is ok
::debug::starting to run fails
::error title=fails,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: this is an error\\] {%0A  failureType: 'testCodeFailure',%0A  cause: Error: this is an error%0A      at .*.<anonymous> (.*/example.js:6:11).*
::debug::starting to run is a diagnostic
::debug::completed running is a diagnostic
::notice file=tests/example.js::this is a diagnostic
::error title=tests,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: 1 subtest failed\\] { failureType: 'subtestsFailed', cause: '1 subtest failed', code: 'ERR_TEST_FAILURE' }
::debug::starting to run more tests
::debug::starting to run is ok
::debug::completed running is ok
::debug::completed running more tests
::debug::starting to run is skipped
::debug::completed running is skipped
::debug::starting to run is a todo
::debug::completed running is a todo
::group::Test results \\(3 passed, 1 failed\\)
::notice::Total Tests: 6%0ASuites 📂: 2%0APassed ✅: 3%0AFailed ❌: 1%0ACanceled 🚫: 0%0ASkipped ⏭️: 1%0ATodo 📝: 1%0ADuration 🕐: .*ms
::endgroup::
`,
  summary: `<h1>Test Results</h1>
<table><tr><td>Total Tests</td><td>6</td></tr><tr><td>Suites 📂</td><td>2</td></tr><tr><td>Passed ✅</td><td>3</td></tr><tr><td>Failed ❌</td><td>1</td></tr><tr><td>Canceled 🚫</td><td>0</td></tr><tr><td>Skipped ⏭️</td><td>1</td></tr><tr><td>Todo 📝</td><td>1</td></tr><tr><td>Duration 🕐</td><td>.*ms</td></tr></table>
`,
};
