$('#post_create()').click( function() {
    post_create()
    });

    function post_create() {
        let content = $("#content").val()
        let category = $("select[name=category]").val()
        let title = $("#title").val()
        let formData = new FormData();

        formData.append("content", content)
        formData.append("category", category)
        formData.append("title", title)
        const formFile = $("#img")[0];
        if (formFile.files.length === 0) {
        } else {
          formData.append("img", formFile.files[0]);
        }
        console.log("제목",title)
        console.log("내용",content)
        console.log("폼데이터",formData)
        console.log("카테고리",category)
    
        $.ajax({
    
            type: "POST",
            url: "http://127.0.0.1:8000/community/category/",
            processData: false,
            contentType: false,
            data: formData,
    
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("access"),
            },
    
            success: function (result) {
            alert("작성완료", result);
            location.href='index.html'
            },
            error : function(){
            alert("게시글을 조건에 맞게 작성했는지 확인해주세요");
            }
            }
          );
    }

