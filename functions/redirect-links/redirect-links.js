// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    console.log(context);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(require('../links.json')),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
