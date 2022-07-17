<!DOCTYPE html>
<html lang="en">
<%@ page import = "java.sql.*"%>
<head>
    <title>BlogSite</title>
    <link rel="icon" href="logo.jpeg">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <link rel="stylesheet" href="bootstrap-4.4.1-dist/css/bootstrap.min.css">
    <script src="bootstrap-4.4.1-dist/js/jquery.min.js"></script>
    <script src="bootstrap-4.4.1-dist/js/popper.min.js"></script>
    <script src="bootstrap-4.4.1-dist/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container mt-3">
        <div id="heading">
            BLOG SITE
        </div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link " href="index.jsp">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="newBlog.html">Add New Blog</a>    
            </li>
        </ul>
    </div>
    <div>
        <% 
           try {
        Class.forName("oracle.jdbc.driver.OracleDriver"); 
                Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "it19737120", "gpjp2000");

                   String title = request.getParameter("title");
                   String body = request.getParameter("body");
                   String image = request.getParameter("image");
                   PreparedStatement st = con.prepareStatement("insert into blogs values(?, ?, ?)");
                   st.setString(1, title);
                   st.setString(2, body);
                   st.setString(3, image);
                   st.executeUpdate();
                   st.close(); 
           }
            catch(Exception e)
            {
                out.print(e);
            }
           %>
        Blog has been successfully added!
    </div>
</body>

</html>
