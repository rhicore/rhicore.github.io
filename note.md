# 元素尺寸
 元素的垂直尺寸（最终高度）由以下组成：
total height = content height + padding (top+bottom) + border (top+bottom) + margin (top+bottom)


1. content height 内容高度由以下控制：
height：直接设置内容区域高度

或内容自身撑开（比如文字多时自动增高）

2. line-height 影响文字的 单行占位高度：
即使你设置了 font-size: 16px，如果 line-height 是 2，这一行文字可能会占用 32px 的高度。

如果你没设置 height，元素的 content height 会被 line-height 撑开。



# CSS选择器
类选择器	.title	class="title"
ID 选择器	#main	id="main"
元素选择器	h1, p	所有该标签元素
组合选择器	h1.title	<h1 class="title">
后代选择器	.box .item	.box 中的 .item
并列选择器	h1, h2	所有 h1 和 h2

