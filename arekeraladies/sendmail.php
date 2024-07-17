<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(isset($_POST['send'])){

    if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone']) && !empty($_POST['pg'])){

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.arakerepgladies.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'info@arakerepgladies.com';                     //SMTP username
        $mail->Password   = 'Xi(hd!^&Av;?';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    
        //Recipients
        $mail->setFrom('info@arakerepgladies.com', 'Info');
    
    
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
      
        $mail->Subject = 'Quote From Arakere Ladies PG';

        $mail->addAddress('arakereladiespg@gmail.com', 'Admin');     //Add a recipient
        
        $mail->Body    = "";

        $mail->send();

        echo ' <script>
        alert("Mail Sent Successfully");
        location.replace(document.referrer);
        </script>';

        die();

    }
    catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
       }

    }

    else{
        echo ' <script>
        alert("Please Fill All Fields");
        location.replace(document.referrer);
        </script>';

        die();
    }

}


else{
    echo '<h2 style="display: block; margin: 20px auto; width:fit-content;"> Sorry No Data </h2> <a href="https://arakerepgladies.com/"  style="display: block; margin: 20px auto; width:fit-content;"> Back to Home</a>';
  }