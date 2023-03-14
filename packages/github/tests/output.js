module.exports = {
  stdout: `::debug::starting to run tests
::debug::starting to run is ok
::debug::completed running is ok
::debug::starting to run fails
::error title=fails,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: this is an error\\] {%0A  failureType: 'testCodeFailure',%0A  cause: Error: this is an error%0A      at Object.<anonymous> (.*/example.js:6:11).*
::debug::starting to run is a diagnostic
::debug::completed running is a diagnostic
::notice file=tests/example.js::this is a diagnostic
::error title=tests,file=tests/example.js::\\[Error \\[ERR_TEST_FAILURE\\]: 1 subtest failed\\] { failureType: 'subtestsFailed', cause: '1 subtest failed', code: 'ERR_TEST_FAILURE' }
::group::Test results \\(2 passed, 2 failed\\)
::notice::Total Tests: 1%0APassed ✅: 0%0AFailed ❌: 1%0ACanceled 🚫: 0%0ASkipped ⏭️: 0%0ATodo 📝: 0%0ADuration: .*ms
::endgroup::
`,
  summary: `<h1>Test Results</h1>
<table><tr><td>Total Tests</td><td>1</td></tr><tr><td>Passed ✅</td><td>0</td></tr><tr><td>Failed ❌</td><td>1</td></tr><tr><td>Canceled 🚫</td><td>0</td></tr><tr><td>Skipped ⏭️</td><td>0</td></tr><tr><td>Todo 📝</td><td>0</td></tr><tr><td>Duration</td><td>.*ms</td></tr></table>
`,
};
