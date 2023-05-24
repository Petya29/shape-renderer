# Shape Renderer

To run just type "npm i" and after "npm run dev"

## writing tests:

1. API Integration Test:
  * Test the successful retrieval of shape data from the API.
  * Test error handling when the API returns invalid or unexpected data.
  * Test error handling when the API is not available or returns an error response.

2. Drawing Functionality Test:
  * Test that the application correctly renders and displays the shapes based on the received data.
  * Test various shapes to ensure they are drawn accurately.
  * Test different sizes and positions of shapes to verify their correct placement on the canvas.
  * Test the application's behavior when receiving invalid or incomplete shape data.

3. User Interaction Test:
  * Test user interactions such as clicking or hovering over the shapes.
  * Test the responsiveness of the application when interacting with multiple shapes simultaneously.

4. Edge Cases Test:
  * Test the application's behavior when receiving a large number of shapes to ensure it can handle scalability.
  * Test the application's performance by measuring the rendering time for a significant number of shapes.
  * Test the application's behavior with extreme shape dimensions or positions (very large or very small shapes, shapes outside the visible canvas).

5. Error Handling Test:
  * Test the application's response when encountering network errors or timeouts during API communication.
  * Test error scenarios, such as when the API returns malformed JSON or inconsistent shape data.
  * Test the handling of errors related to rendering or displaying the shapes.