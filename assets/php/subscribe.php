<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $pdfPath = './assets/newsletter_pdf/Biztech_Newsletter.pdf'; // Path to your PDF file
        $subject = "Here is the Biztech Newsletter!";
        $message = "Thank you for being involved with Biztech UoA. Here is your requested newsletter.";

        // Boundary 
        $boundary = md5("random");

        // Headers
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From: your-email@example.com\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";

        // Plain text message
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($message));

        // PDF attachment
        if (file_exists($pdfPath)) {
            $pdfContent = chunk_split(base64_encode(file_get_contents($pdfPath)));
            $body .= "--$boundary\r\n";
            $body .= "Content-Type: application/pdf; name=\"yourfile.pdf\"\r\n";
            $body .= "Content-Disposition: attachment; filename=\"yourfile.pdf\"\r\n";
            $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
            $body .= $pdfContent;
        } else {
            echo "PDF file not found.";
            exit();
        }

        // Final boundary
        $body .= "--$boundary--";

        // Send email
        if (mail($email, $subject, $body, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request.";
}
