# Twins Cloud ERP 综合系统

Twins是一个面向企业的全栈ERP系统，采用现代微服务架构，支持租户管理、环境管理、用户认证、主数据、元数据、低代码平台、AI agent、视频处理、工作流、业务流编排等模块。

## 技术栈

- 前端：Vue3 + PrimeVue + Pinia + Axios
- 后端：JDK21，Spring Cloud，Spring MVC，Spring Gateway，Spring OAuth2 Server，Nacos
- 数据库：PostgreSQL
- 缓存：Redis + Caffeine
- 文件存储：minIO
- 消息队列：Kafka
- 工作流：Activiti
- 定时任务：xxl-job
- ORM：mybatis
- AI：LLM
- 视频处理：WebRTC

## 目录结构

请参考本项目根目录结构。

## 启动建议

1. 配置好 Nacos、PostgreSQL、Redis、Kafka、minIO 等基础服务。
2. 按需启动 twins-backend 下各微服务。
3. twins-frontend 使用 Vite 启动开发环境。