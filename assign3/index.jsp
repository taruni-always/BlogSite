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
    <script src="lib/angular.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    
    <div class="container mt-3">
        <div id="heading">
            BLOG SITE
        </div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="newBlog.html">Add New Blog</a>    
            </li>
        </ul>
    </div>
    <div id="carouselExIndicators" class="carousel slide container mt-2" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="Qblog1.png" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="Qblog2.jpeg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="Qblog3.jpeg" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="Qblog4.png" class="d-block w-100" height="400">
            </div>
            <div class="carousel-item">
                <img src="Qblog5.png" class="d-block w-100" height="400">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <div ng-app="myApp" class="container mt-3" ng-controller="myCtrl">
        
        <%
	String title = request.getParameter("title");
	String body = request.getParameter("body");
	String image = request.getParameter("image");
    try
	{
		Class.forName("oracle.jdbc.driver.OracleDriver"); 
		Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "it19737120", "gpjp2000");
	    
       
		Statement stmt = con.createStatement();  
		ResultSet rs = stmt.executeQuery("select * from blogs");
		while (rs.next()){
	       %>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title" style="margin-right: 20%;"> <%=rs.getString(1)%> </h3>
                    <div class="row">
                        <div class="col-4">
                            <img src=<%=rs.getString(3)%>>
                        </div>
                        <div class="col">
                            <div class="card-text" style="text-align: left;" ng-hide="myvar">
                                <%=rs.getString(2)%>
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
            <br>
        <% }
            }
            catch(Exception e)
            {
                out.print(e);
            }
        %>
    </div>
</body>

</html>
